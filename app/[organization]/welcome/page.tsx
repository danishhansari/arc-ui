

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { Label } from '@/components/ui/label'

interface OnboardingStep {
    id: number
    title: string
    description: string
    placeholder: string
}

const steps: OnboardingStep[] = [
    {
        id: 1,
        title: 'Set up your profile',
        description: `Choose how you'll appear in Arc`,
        placeholder: 'Enter your name...',
    },
    {
        id: 2,
        title: 'Tell Us Your Role',
        description: 'Help us personalize your experience',
        placeholder: 'Your Role',
    },
    {
        id: 3,
        title: 'Almost There!',
        description: 'You&apos;re ready to go',
        placeholder: 'Company Name',
    },
]

export default function OnboardingCarousel() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        company: '',
    })

    const step = steps[currentStep]
    const isLastStep = currentStep === steps.length - 1
    const isFirstStep = currentStep === 0

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target
        if (placeholder === 'Your Name') {
            setFormData((prev) => ({ ...prev, name: value }))
        } else if (placeholder === 'Your Role') {
            setFormData((prev) => ({ ...prev, role: value }))
        } else if (placeholder === 'Company Name') {
            setFormData((prev) => ({ ...prev, company: value }))
        }
    }

    const handleContinue = () => {
        if (isLastStep) {
            console.log('Onboarding complete:', formData)
        } else {
            setCurrentStep((prev) => prev + 1)
        }
    }

    const handleSkip = () => {
        console.log('Onboarding skipped')
    }

    return (
        <div className="flex h-dvh w-full overflow-hidden">
            <div className="flex flex-col justify-between p-8 flex-1">
                <div className="flex items-center justify-center w-md mx-auto h-full">
                    <div className="flex flex-col w-full ">
                        <div
                            key={`content-${currentStep}`}
                            className="flex-1"
                        >
                            <h1 className="text-lg  font-medium tracking-tight text-foreground">
                                {step.title}
                            </h1>
                            <p className="text-sm mt-1 mb-8 text-zinc-500">
                                {step.description}
                            </p>
                        </div>
                        <div
                            key={`form-${currentStep}`}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <Label className="text-sm text-zinc-500 font-normal">
                                    {currentStep === 0 ? 'Name' : currentStep === 1 ? 'Your Role' : 'Company'}
                                </Label>
                                <Input
                                    type="text"
                                    placeholder={step.placeholder}
                                    value={
                                        currentStep === 0
                                            ? formData.name
                                            : currentStep === 1
                                                ? formData.role
                                                : formData.company
                                    }
                                    onChange={handleInputChange}
                                    className="border border-zinc-800 py-5 placeholder:font-normal placeholder:text-zinc-500 placeholder:text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm text-zinc-500 font-normal">
                                    {currentStep === 0 ? 'Title' : currentStep === 1 ? 'Your Role' : 'Company'}
                                </Label>

                                <Input
                                    type="text"
                                    placeholder={'Software Engineer'}
                                    value={
                                        currentStep === 0
                                            ? formData.name
                                            : currentStep === 1
                                                ? formData.role
                                                : formData.company
                                    }
                                    onChange={handleInputChange}
                                    className="border border-zinc-800 py-5 placeholder:font-normal placeholder:text-zinc-500 placeholder:text-sm"
                                />
                            </div>
                        </div>

                        <div
                            className="flex justify-end gap-3 pt-4 mt-8"
                        >
                            <Button
                                variant="link"
                                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                                disabled={isFirstStep}
                                className="h-12 px-6"
                            >
                                Back
                            </Button>

                            <Button
                                onClick={handleContinue}
                                variant="secondary"
                                className="h-12 rounded-full px-5"
                            >
                                {isLastStep ? "Complete" : "Continue"}
                            </Button>
                        </div>
                    </div>
                </div>


            </div>

            <motion.div
                key={`image-${currentStep}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="hidden w-1/2 flex-col items-center justify-center bg-zinc-900/75 p-12 lg:flex"
            >
                <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl">
                    <div className="flex h-full w-full items-center justify-center">

                    </div>
                </div>
                <div className="mt-8 text-center text-white">
                    <p className="text-sm font-medium opacity-90">
                        Step {currentStep + 1} of {steps.length}
                    </p>
                </div>
            </motion.div>

        </div>
    )
}
