function StatusBadge({ isOpenToWork }) {
  const label = isOpenToWork ? 'Open to Work' : 'Busy learning'
  const styles = isOpenToWork
    ? 'bg-indigo-50 text-indigo-700'
    : 'bg-gray-100 text-gray-500'

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors ${styles}`}
    >
      {label}
    </span>
  )
}

export default StatusBadge
