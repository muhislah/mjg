import React, { useState, ReactNode, useEffect, useRef } from 'react'
import classes from './Carousel.module.css'
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5"

interface IProps {
    show: number
    children: ReactNode[]
    sliderClass?: string
    isRepeatedProps?: boolean
    withIndicator?: boolean
    indicatorSpacing?: string
    indicatorContainerClasses?: string
    indicatorClasses?: {
        active?: string
        passive?: string
        far?: string
    }
    leftArrow?: (prev: () => void) => React.ReactNode
    rightArrow?: (prev: () => void) => React.ReactNode
    containerClasses?: string
    sliderOffset?: number
}

const Carousel = ({ show, children, sliderClass, isRepeatedProps, withIndicator, indicatorSpacing, indicatorContainerClasses, indicatorClasses, leftArrow, rightArrow, containerClasses, sliderOffset }: IProps) => {
    const indicatorRef = useRef<HTMLDivElement>(null)
    const [isRepeated, setIsRepeated] = useState(isRepeatedProps && children.length > show)

    const [state, setState] = useState({
        activeIndex: isRepeated ? show : 0
    })

    const [touchPosition, setTouchPosition] = useState<null | number>(null)

    const [length, setLength] = useState(children.length)

    useEffect(() => {
        const localIsRepeated = isRepeatedProps && children.length > show
        setIsRepeated(localIsRepeated)
        setState(prev => ({
            ...prev,
            activeIndex: localIsRepeated ? show : 0
        }))
    }, [children, isRepeatedProps, show])

    useEffect(() => {
        setLength(children.length)
    }, [children])

    useEffect(() => {
        if (isRepeated) {
            if (state.activeIndex === show || state.activeIndex === (length)) {
                setTransitionEnabled(true)
            }
        }

        // if (withIndicator) {
        //     const active = indicatorRef.current?.querySelector('.legacy-carousel-active')
        //     if (active) {
        //         const index = active.getAttribute('data-index')
        //         if (index !== null) {
        //             indicatorRef.current?.scrollTo({
        //                 left: ((Number(index) - 2) / 5) * 50,
        //                 behavior: 'smooth',
        //             })
        //         }
        //     }
        // }
        // eslint-disable-next-line
    }, [state.activeIndex])

    const nextCard = () => {
        if (isRepeated || state.activeIndex < (length - show)) {
            let newActiveIndex = state.activeIndex
            newActiveIndex = newActiveIndex + 1
            setState({ activeIndex: newActiveIndex })
        }
    }

    const prevCard = () => {
        if (isRepeated || state.activeIndex > 0) {
            let newActiveIndex = state.activeIndex
            newActiveIndex = newActiveIndex - 1
            setState({ activeIndex: newActiveIndex })
        }
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        e.stopPropagation()
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        e.stopPropagation()
        const touchDown = touchPosition
        if (touchDown === null) {
            return
        }

        const touchUp = e.touches[0].clientX
        const diff = touchDown - touchUp

        if (diff > 5) {
            nextCard()
        }

        if (diff < -5) {
            prevCard()
        }

        setTouchPosition(null)
    }

    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const handleTransitionEnd = () => {
        if (isRepeated) {
            if (state.activeIndex === 0) {
                setTransitionEnabled(false)
                setState(prev => ({
                    ...prev,
                    activeIndex: length
                }))
            } else if (state.activeIndex === length + show) {
                setTransitionEnabled(false)
                setState(prev => ({
                    ...prev,
                    activeIndex: show
                }))
            }
        }
    }

    const renderExtraPrev = () => {
        const output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        const output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    const renderDots = () => {
        const maxSteps = length - (show - 1)

        const adjustedActiveIndex = Math.min(state.activeIndex, maxSteps)
        const calculatedActiveIndex = Math.floor(adjustedActiveIndex)

        return Array.from({ length: maxSteps }, (_, index) => {
            const indicatorCls = indicatorClasses || {}
            const defaultCls = classes || {}

            let className = ''
            if (calculatedActiveIndex === index) {
                className = indicatorCls.active || defaultCls.active
            } else if (Math.abs(calculatedActiveIndex - index) <= 2) {
                className = indicatorCls.passive || defaultCls.passive
            } else {
                className = indicatorCls.far || defaultCls.far
            }

            return (
                <div
                    key={index}
                    data-index={index}
                    className={`rounded-full ${calculatedActiveIndex === index ? 'legacy-carousel-active' : ''} ${className}`}
                />
            )
        })
    }



    // const renderDots = () => {
    //     const output = []
    //     const localShow = isRepeated ? show : 0
    //     const localLength = isRepeated ? length : Math.ceil(length / show)
    //     const calculatedActiveIndex = (state.activeIndex - localShow) < 0 ? (length + (state.activeIndex - localShow)) : state.activeIndex - localShow

    //     for (let index = 0; index < localLength; index++) {
    //         let className = ''
    //         if (calculatedActiveIndex === index) {
    //             className = indicatorClasses?.active || classes.active
    //         } else {
    //             if (calculatedActiveIndex === 0) {
    //                 if (calculatedActiveIndex + index <= 2) {
    //                     className = indicatorClasses?.passive || classes.passive
    //                 } else {
    //                     className = indicatorClasses?.far || classes.far
    //                 }
    //             } else if (calculatedActiveIndex === localLength - 1) {
    //                 if (Math.abs(calculatedActiveIndex - index) <= 2) {
    //                     className = indicatorClasses?.passive || classes.passive
    //                 } else {
    //                     className = indicatorClasses?.far || classes.far
    //                 }
    //             } else {
    //                 if (Math.abs(calculatedActiveIndex - index) === 1) {
    //                     className = indicatorClasses?.passive || classes.passive
    //                 } else {
    //                     className = indicatorClasses?.far || classes.far
    //                 }
    //             }
    //         }
    //         output.push(
    //             <div key={index} data-index={index} className={`rounded-full ${calculatedActiveIndex === index ? 'legacy-carousel-active' : ''} ${className}`} />
    //         )
    //     }
    //     return output
    // }

    return (
        <div className={`relative group my-0 mx-auto flex flex-col ${containerClasses}`}>
            <div className="flex">
                {
                    state.activeIndex > 0 ?
                        leftArrow ?
                            leftArrow(prevCard)
                            :
                            <div className="hidden lg:block absolute left-0 z-1 transform top-1/2 -translate-y-1/2 -translate-x-1/2">
                                <button
                                    onClick={() => prevCard()}
                                    className="bg-white hover:bg-gray-efef transform active:scale-90 shadow-lg relative h-10 w-10 rounded-full text-xl text-white outline-none focus:outline-none transition-all duration-150 linear"
                                >
                                    <IoChevronBackOutline className="absolute inset-0 mx-auto my-auto text-[#181818]" />
                                </button>
                            </div>
                        : null
                }
                <div className="overflow-hidden lg:p-0 h-full w-full" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div onTransitionEnd={() => handleTransitionEnd()} className={`flex flex-row rtl:flex-row-reverse ${transitionEnabled ? 'transition-all' : 'transition-none'} duration-300 ease-in-out ${sliderClass || ''} no-scrollbar-all`} style={{ transform: `translateX(calc(-${state.activeIndex * (100 / show)}% + ${(sliderOffset || 0) * state.activeIndex}px))` }}>
                        {
                            (length > show && isRepeated) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (length > show && isRepeated) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {
                    state.activeIndex < length - show ?
                        rightArrow ?
                            rightArrow(nextCard)
                            :
                            <div className="hidden lg:block absolute right-0 z-1 transform top-1/2 -translate-y-1/2 translate-x-1/2">
                                <button
                                    onClick={() => nextCard()}
                                    className="bg-white hover:bg-gray-efef transform active:scale-90 shadow-lg relative h-10 w-10 rounded-full text-xl text-white outline-none focus:outline-none transition-all duration-150 linear"
                                >
                                    <IoChevronForwardOutline className="absolute inset-0 mx-auto my-auto text-[#181818]" />
                                </button>
                            </div>
                        : null
                }
            </div>
            {
                withIndicator &&
                <div ref={indicatorRef} className={`flex flex-row rtl:flex-row-reverse items-center mx-auto no-scrollbar-all ${indicatorContainerClasses} ${indicatorSpacing} ${classes.dots}`}>
                    {
                        renderDots()
                    }
                </div>
            }
        </div>
    )
}

export default Carousel
