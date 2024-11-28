import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

function ixvisTolma() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
            <DialogTitle className="font-bold">Ixvis Tolma Competition</DialogTitle>
            <Description>Who Will Eat Ixvis Tolma First?</Description>
            <p>Are you sure you are ready to beat the world record for the most ixvis tolmas eaten?</p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel Your Vote</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}