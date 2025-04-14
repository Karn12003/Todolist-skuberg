import React from 'react'

function ArrowL({ size = 36 }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H36V9H3.825Z" fill="white" />
        </svg>

    )
}

export default ArrowL