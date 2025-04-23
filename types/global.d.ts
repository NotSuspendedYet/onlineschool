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
  export function useColorModeValue<T>(lightValue: T, darkValue: T): T;
}

declare module 'react-icons/fi' {
  export const FiArrowRight: any;
} 