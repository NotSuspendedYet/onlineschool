// Type declarations for missing modules
declare module 'react' {
  export = React;
  export as namespace React;
  namespace React {
    type FC<P = {}> = FunctionComponent<P>;
    interface FunctionComponent<P = {}> {
      (props: P): React.ReactElement | null;
    }
    type ReactElement = any;
    type ReactNode = any;
    
    export const Fragment: any;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    title: any;
    meta: any;
    link: any;
    head: any;
    [elemName: string]: any;
  }
}

declare module '@chakra-ui/react' {
  export const Box: any;
  export const Heading: any;
  export const Text: any;
  export const Stack: any;
  export const Container: any;
  export const SimpleGrid: any;
  export const Badge: any;
  export const Flex: any;
  export const Image: any;
  export const Button: any;
  export const ButtonGroup: any;
  export const IconButton: any;
  export const Input: any;
  export const Collapse: any;
  export const Icon: any;
  export const Popover: any;
  export const PopoverTrigger: any;
  export const PopoverContent: any;
  export const Avatar: any;
  export const HStack: any;
  export const VStack: any;
  export function useColorModeValue<T>(lightValue: T, darkValue: T): T;
  export function useDisclosure(): {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
  };
}

declare module 'react-icons/fi' {
  export const FiArrowRight: any;
}

declare module 'react-icons/fa' {
  export const FaStar: any;
  export const FaTwitter: any;
  export const FaYoutube: any;
  export const FaInstagram: any;
  export const FaFacebook: any;
}

declare module '@chakra-ui/icons' {
  export const HamburgerIcon: any;
  export const CloseIcon: any;
  export const ChevronDownIcon: any;
  export const ChevronRightIcon: any;
}

declare module 'next/link' {
  import { ComponentType } from 'react';
  
  const Link: ComponentType<{
    href: string;
    passHref?: boolean;
    children: React.ReactNode;
    [key: string]: any;
  }>;
  
  export default Link;
}

declare module 'next/router' {
  export function useRouter(): {
    pathname: string;
    query: any;
    asPath: string;
    push: (url: string, as?: string) => Promise<boolean>;
  };
}

declare module 'next/head' {
  import { ComponentType } from 'react';
  
  const Head: ComponentType<{
    children: React.ReactNode;
  }>;
  
  export default Head;
} 