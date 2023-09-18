import { useState } from 'react'

/**
 * booleanの状態を管理するカスタムフック
 */
export const useToggle = (
  initialValue?: boolean,
): {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
} => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue ?? false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const onToggle = () => setIsOpen(!isOpen)

  return { isOpen, onClose, onOpen, onToggle }
}
