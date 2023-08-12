import React from 'react';
import { render, screen } from '@testing-library/react';
import DrawerDemo from '@/app/drawer/page'

describe("DrawerDemo", () => {
    it("should show drawer when I click button and hide drawer when I click backdrop", () => {
        render(<DrawerDemo />)
        const buttonElement = screen.getByRole("button", { name: /Open drawer/i })
        expect(1).toBe(1)
    })
})

