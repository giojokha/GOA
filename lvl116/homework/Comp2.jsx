import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

function lazyGeorge() {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      <DisclosureButton className="w-full border-b pb-2 text-left">Is Georgie Availale Now?</DisclosureButton>
      <div className="overflow-hidden py-2">
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          No he busy, he has work to do for GOA, because he lazy.
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}