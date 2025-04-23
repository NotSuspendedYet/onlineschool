/// <reference types="react" />
/// <reference types="react-dom" />

// Provide missing React exports
declare module 'react' {
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  
  export type Key = string | number;
  export type ElementType = any;
  
  export interface ChangeEvent<T = Element> {
    target: T;
    currentTarget: T;
  }
  
  export interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
  }
}

// Fix for @chakra-ui/react components
declare module '@chakra-ui/react' {
  export interface InputProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export interface SelectProps {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

  // Добавляем недостающие компоненты
  export const InputGroup: React.FC<any>;
  export const InputLeftElement: React.FC<any>;
  export const Select: React.FC<SelectProps>;
  export const UnorderedList: React.FC<any>;
  export const ListItem: React.FC<any>;
}

// Fix for react-icons/fi
declare module 'react-icons/fi' {
  export const FiUsers: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiClock: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiBookOpen: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiCheck: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiSearch: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiArrowRight: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiBook: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiAward: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export const FiMonitor: React.ComponentType<React.SVGAttributes<SVGElement>>;
} 