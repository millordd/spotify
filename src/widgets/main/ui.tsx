import { useState } from 'react';

import { Anchor, Card, Grid, Image, Overlay, Text } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';

export const Main = () => {
  // const [visible, toggle] = useDisclosure();
  const [overlay, setOverlay] = useState<number | null>(null);
  return (
    <div className="mt-1 p-2">
      <div className="flex justify-between pt-2 px-3">
        <Anchor className="text-[white] font-bold text-[23px]">
          Плейлисты Spotify
        </Anchor>
        <Anchor className="text-[white]">Показать все</Anchor>
      </div>

      <Grid className="mt-8">
        {Array.from({ length: 40 }, (_, index) => (
          <Grid.Col key={index} span={{ sm: 4, md: 3, lg: 2, xl: 1.5 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder={false}
              className="min-h-[28vh] bg-[#151515]"
              onMouseEnter={() => setOverlay(index)}
              onMouseLeave={() => setOverlay(null)}
              // key={index}
            >
              <Card.Section className="p-4">
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={140}
                  alt="Norway"
                  className="rounded-md"
                />
              </Card.Section>
              <Text className="font-bold">Happy Hits</Text>
              <Text size="sm" className="text-[]">
                Hits to boost your mood and fill you
              </Text>
              {/* render overlay only when visible */}
              {overlay === index && (
                <Overlay color="#000" backgroundOpacity={0.85}>
                  <Text size="lg" color="white">
                    Some overlay content
                  </Text>
                </Overlay>
              )}
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
