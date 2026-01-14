import Image from 'next/image'
import { getImagePath } from '@/utils/utils'
import Button from '../ui/Button'
import { useAuthStore } from '@/store/useAuthStore'

const ProfileAvatar = () => {
    const {logout} = useAuthStore();

  return (
    <Button onClick={logout}>
        <Image src={getImagePath("iconProfilePicture.png")} alt="profile" width={40} height={40} />
    </Button>
  )
}

export default ProfileAvatar