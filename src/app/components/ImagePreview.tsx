import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import React from 'react'

type Props = {
    isOpen: boolean
    onClose: () => void
    image: string
}

const ImagePreview = (props: Props) => {
    const closeButton = () => {
        return (
            <div className='relative -top-5'>
                <FontAwesomeIcon icon={faClose} />
            </div>
        )
    }
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} closeButton={closeButton()}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody className='z-[5] p-2'>
                            {
                                props.image.endsWith('mp4') ?
                                    <video
                                        className="object-contain max-w-full rounded-lg"
                                        src={props.image}
                                        autoPlay
                                        muted
                                    /> :
                                    <Image
                                        className="h-full w-full rounded-lg z-0"
                                        src={props.image}
                                        alt=""
                                        loading='lazy'
                                    />
                            }
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ImagePreview