export const fakeSend = async (data) => {
  const SEND_TIMEOUT_MS = 2000

  return new Promise((onFulfilled) => {
    setTimeout(() => {
      console.log('data sent', data);
      onFulfilled(data)
    }, SEND_TIMEOUT_MS)
  })
} 