// src/app/api/actuals/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { actualSchema } from '@/lib/validations'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const actual = await prisma.actual.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
      include: { category: true },
    })

    if (!actual) {
      return NextResponse.json({ error: 'Actual not found' }, { status: 404 })
    }

    return NextResponse.json(actual)
  } catch (error) {
    console.error('GET /api/actuals/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validated = actualSchema.partial().parse(body)

    const data: any = { ...validated }
    if (validated.date) {
      data.date = new Date(validated.date)
    }

    const actual = await prisma.actual.updateMany({
      where: {
        id: params.id,
        userId: session.user.id,
      },
      data,
    })

    if (actual.count === 0) {
      return NextResponse.json({ error: 'Actual not found' }, { status: 404 })
    }

    const updated = await prisma.actual.findUnique({
      where: { id: params.id },
      include: { category: true },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('PATCH /api/actuals/[id] error:', error)
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const result = await prisma.actual.deleteMany({
      where: {
        id: params.id,
        userId: session.user.id,
      },
    })

    if (result.count === 0) {
      return NextResponse.json({ error: 'Actual not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /api/actuals/[id] error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}