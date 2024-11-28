import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

function moreIxvisTolma() {
  return (
    <PopoverGroup>
      <Popover>
        <PopoverButton>Product</PopoverButton>
        <PopoverPanel>Ixvis Tolma</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Consumption</PopoverButton>
        <PopoverPanel>Not intended! So Watch Out While Eating bro!</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Pricing</PopoverButton>
        <PopoverPanel>It's Free, Why would someone charge money for this?</PopoverPanel>
      </Popover>
    </PopoverGroup>
  )
}