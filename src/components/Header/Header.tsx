import React from 'react';
import SearchBar from '@/components/SearchBar';
import logo from '@/img/rsc-new-logo.webp';

interface Props {
  onChange?: (data?: string) => void;
  onSearch?: (data: string) => void;
}

export default function Header({ onChange, onSearch }: Props) {
  const headerRef = React.useRef<HTMLElement>(null);
  const [isTransparent, setIsTransparent] = React.useState<boolean>(true);

  const isScrolledNav = () => {
    if (typeof window === 'undefined' || !headerRef.current) {
      return false;
    }
    const { height } = headerRef.current.getBoundingClientRect();
    return window.scrollY < height;
  };

  React.useEffect(() => {
    if (window) {
      const onScroll = () => {
        const shouldBeTransparent = isScrolledNav();
        if (shouldBeTransparent !== isTransparent) {
          setIsTransparent(shouldBeTransparent);
        }
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [isTransparent]);

  return (
    <header
      ref={headerRef}
      className={`flex justify-between fixed w-full h-20 py-4 px-6 flex-shrink-0 z-50 ${
        isTransparent ? 'bg-gradient-to-b from-bgPurple' : 'bg-bgPurple '
      } transition-all`}
    >
      <div className="h-full">
        <img className="object-contain h-full" src={logo} alt="rockstar logo" />
      </div>
      <div className="flex">
        <SearchBar onChange={onChange} onSearch={onSearch} />
      </div>
    </header>
  );
}
