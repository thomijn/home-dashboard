import { useFrame } from '@react-three/fiber'

const CameraControls = () => {
    useFrame(({ camera }) => {
        camera.lookAt(-3, 0, -2)
    })

    return null
}

export default CameraControls