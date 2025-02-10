import { Image } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { BREAKPOINTS } from '@/constants/DesignSystem';

type AuthImageProps = {
  type: 'login' | 'register';
};

export function AuthImage({ type }: AuthImageProps) {
  const { width } = useWindowDimensions();
  const isDesktopOrTablet = width >= BREAKPOINTS.tablet;

  if (!isDesktopOrTablet) {
    return null;
  }

  // Aqui você muda a imagem de login
  const loginImage = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop';

  // Aqui você muda a imagem de cadastro
  const registerImage = 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1920&auto=format&fit=crop';

  return (
    <Image
      source={{ uri: type === 'login' ? loginImage : registerImage }}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
      resizeMode="cover"
    />
  );
} 