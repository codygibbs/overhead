import { Transition } from "@headlessui/react"
import { useState } from "react"
import X from "./icon/X"

interface Props {
  show: boolean
  onClose: () => void
  title: string
}

const Slideover: React.FC<Props> = (props) => {
  const handleClose = () => {
    props.onClose()
  }

  return (
    <div className={`fixed inset-0 overflow-hidden ${props.show ? "block" : "hidden"}`}>
      <div className="absolute inset-0 overflow-hidden">
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16" aria-labelledby="slide-over-heading">
          <div className="w-screen max-w-2xl">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                    {props.title}
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      onClick={handleClose}
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <X />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6">
                {props.children}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Slideover
