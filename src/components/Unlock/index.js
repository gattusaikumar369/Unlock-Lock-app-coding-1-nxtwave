import {useState} from 'react'
import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [unlock, setUnlock] = useState(false)
  
  const imageUrl = unlock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const text = unlock ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const btnText = unlock ? 'Lock' : 'Unlock'
  const altText = unlock ? 'unlock' : 'lock'

  const toggleUnlock = () => {
    setUnlock((prevUnlock) => !prevUnlock)
  }

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button onClick={toggleUnlock}>{btnText}</Button>
    </UnlockLockContainer>
  )
}

export default Unlock