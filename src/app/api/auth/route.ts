import { authService } from '@/modules/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  await authService.createSession()
  return NextResponse.json({})
}