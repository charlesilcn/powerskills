import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "密码至少需要 8 个字符" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "该邮箱已被注册" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "CUSTOMER",
        status: "ACTIVE",
        emailVerified: new Date(),
      },
    })

    // Create profile based on role
    if (user.role === "DEVELOPER") {
      await prisma.developerProfile.create({
        data: {
          userId: user.id,
          displayName: name,
        },
      })
    } else {
      await prisma.customerProfile.create({
        data: {
          userId: user.id,
        },
      })
    }

    return NextResponse.json({
      success: true,
      message: "注册成功",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "注册失败，请稍后重试" },
      { status: 500 }
    )
  }
}
