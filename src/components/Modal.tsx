interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg z-50 relative w-80 ">
        <p className="text-lg font-semibold pb-3">{title}</p>
        <p className="pb-8 break-keep">{content}</p>
        <span
          className="text-primary absolute bottom-0 right-0 mb-6 mr-6 cursor-pointer"
          onClick={onClose}
        >
          확인
        </span>
      </div>
    </div>
  )
}

export default Modal
