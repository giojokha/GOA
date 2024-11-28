import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'

function aboutMe() {
  return (
    <Menu>
      <MenuButton>Mee</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="N/A">
            Who Am i?
          </a>
        </MenuItem>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="N/A">
            Contact me
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="N/A">
            What do i want to become?
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}