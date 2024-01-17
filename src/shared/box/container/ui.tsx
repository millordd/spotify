import React, { ReactNode } from 'react';

import { Box } from '@mantine/core';

interface IContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<IContainerProps> = ({
  className,
  children,
}: IContainerProps) => {
  return <Box className={className}>{children}</Box>;
};
