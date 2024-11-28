import { Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

function Transition() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Transition show={open}>
        <TransitionChild>
          <div
            className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
            onClick={() => setOpen(false)}
          />
        </TransitionChild>

        <TransitionChild>
          <div className="fixed inset-y-0 left-0 w-64 bg-white transition duration-300 data-[closed]:-translate-x-full">
          </div>
        </TransitionChild>
      </Transition>
    </>
  )
}