import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import CustomButton from '../../components/common/CustomButton'

import Close from '../../assets/img/public/close.svg'
const imaginApiKey = 'hrjavascript-mastery'
const CarDetailsImage = ({ car, angle }) => (
    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
        <img
            src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${
                car.make
            }&modelFamily=${
                car.model.split(' ')[0]
            }&zoomType=fullscreen&zoomLevel=30&modelYear=${
                car.year
            }&angle=${angle}`}
            alt=""
            className="object-contain"
        />
    </div>
)

const CarDetails = ({ isOpen, closeModal, car }) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-out duration-300"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="car-details__dialog-panel">
                                    <button
                                        type="button"
                                        className="car-details__close-btn"
                                        onClick={closeModal}
                                    >
                                        <img
                                            src={Close}
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </button>

                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="car-details__main-image">
                                            <img
                                                src={`https://cdn.imagin.studio/getimage?customer=${imaginApiKey}&make=${
                                                    car.make
                                                }&modelFamily=${
                                                    car.model.split(' ')[0]
                                                }&zoomType=fullscreen&modelYear=${
                                                    car.year
                                                }`}
                                                alt=""
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                        </div>

                                        <div className="flex gap-3">
                                            <CarDetailsImage
                                                car={car}
                                                angle="29"
                                            />
                                            <CarDetailsImage
                                                car={car}
                                                angle="33"
                                            />
                                            <CarDetailsImage
                                                car={car}
                                                angle="13"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col gap-2">
                                        <h2 className="font-semibold text-xl capitalize">
                                            {car.make} {car.model}
                                        </h2>

                                        <div className="mt-3 flex flex-wrap gap-4">
                                            {Object.entries(car).map(
                                                ([key, value]) => (
                                                    <div
                                                        className="flex justify-between gap-5 w-full text-right"
                                                        key={key}
                                                    >
                                                        <h4 className="text-grey capitalize">
                                                            {key
                                                                .split('_')
                                                                .join(' ')}
                                                        </h4>
                                                        <p className="text-black-100 font-semibold">
                                                            {value}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <CustomButton
                                            title="Mua xe"
                                            btnType="button"
                                            containerStyles="bg-primary-blue text-white rounded-full mt-10"
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails
