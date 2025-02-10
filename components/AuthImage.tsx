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
  const loginImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinMgYsvDNz0Oo2uSw1nW1DtiQIyLP-cvPwTEx_QGd8rVcY9QgI_IsEo6-jVI9sQF9Q3CH6vqTqZqz7ZxhkY_Uf9k_k1iPoribWBBIiMsPSzXHjC0glMsQ1e1xMc2Xi_Pa-Uo-3XUgZYfpFHZID8B8t3h42Mly6m9nL59thsonvcDDTvGkjdqdkwDwWsxJK/d/sleek-blue-red-gradient-fluid-art-wallpaper.jpg';

  // Aqui você muda a imagem de cadastro
  const registerImage = 'https://wallpapercat.com/w/full/b/4/a/795093-3840x2160-desktop-4k-gradient-wallpaper-photo.jpg';

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