import { NextRequest, NextResponse } from 'next/server'
import { authService } from '@/modules/auth'

export async function POST(request: NextRequest) {
  const unauthorizedResponse = NextResponse.json(false, { status: 401 })

  try {
    const sessionId = await request.json()
    if (!sessionId) return unauthorizedResponse

    const isSessionActive = await authService.checkSession(sessionId)
    if (!isSessionActive) return unauthorizedResponse
    
    return NextResponse.json(true)
  } catch(e) {
    return unauthorizedResponse
  }
}