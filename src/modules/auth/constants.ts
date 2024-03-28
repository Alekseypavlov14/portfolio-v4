import { NextResponse } from 'next/server'

export const UNAUTHORIZED_RESPONSE = NextResponse.json({}, { status: 401 })