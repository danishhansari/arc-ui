'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './ui/input-otp'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { Field } from './ui/field'

export function Login() {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const sendEmail = async () => {
        try {
            setLoading(true)

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_USER_SERVICE_URL}/auth/login/email`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                    }),
                }
            )

            if (!response.ok) {
                throw new Error('Failed to send OTP')
            }

            setOtpSent(true)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const verifyOtp = async () => {
        console.log({
            email,
            otp,
        })

    }

    return (
        <main className="flex items-center w-full h-dvh justify-center px-6">
            <div className="w-full max-w-sm md:max-w-xs md:px-4 mb-10">
                <h3 className="text-center text-slate-300 mb-6 text-2xl md:text-lg font-semibold">
                    {otpSent
                        ? `Enter the code sent to ${email}`
                        : "What's your email address?"}
                </h3>
                {!otpSent ? (
                  <Input placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus className="py-7 md:py-6 w-full placeholder:text-sm bg-transparent" />
                ) : (
                    <div className="flex justify-center">
                        <Field className="w-fit my-2">
                            <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} className="h-16 w-14 md:h-12 md:w-10 text-2xl" />
                                    <InputOTPSlot index={1} className="h-16 w-14 md:h-12 md:w-10 text-2xl" />
                                    <InputOTPSlot index={2} className="h-16 w-14 md:h-12 md:w-10 text-2xl" />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} className="h-16 w-14 md:h-12 md:w-10 text-2xl" />
                                    <InputOTPSlot index={4} className="h-16 w-14 md:h-12 md:w-10 text-2xl" />
                                    <InputOTPSlot index={5} className="h-16 w-14 md:h-12 md:w-10 text-2xl" />
                                </InputOTPGroup>
                            </InputOTP>
                        </Field >
                    </div>
                )}

                <div className="flex flex-col mt-4 gap-3">
                    {!otpSent ? (
                        <Button
                            className="py-7 md:py-5 text-gray-300 text-md md:text-sm rounded-full"
                            variant="secondary"
                            onClick={sendEmail}
                            disabled={loading || !email}
                        >
                            {loading ? 'Sending...' : 'Continue with email'}
                        </Button>
                    ) : (
                        <Button
                            className="py-6 md:py-5 text-gray-300 text-md md:text-sm rounded-full"
                            variant="secondary"
                            onClick={verifyOtp}
                            disabled={otp.length !== 6}
                        >
                            Verify OTP
                        </Button>
                    )}

                    <Button
                        variant="link"
                        className="text-sm md:text-xs"
                        onClick={() => {
                            if (otpSent) {
                                setOtpSent(false)
                                setOtp('')
                            }
                        }}
                    >
                        {otpSent ? 'Change email' : 'Back to login'}
                    </Button>
                </div>
            </div>
        </main>
    )
}