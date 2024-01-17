import {
  ActionIcon,
  Anchor,
  Button,
  Flex,
  List,
  Stack,
  Text,
} from '@mantine/core';
import IconCreateFavoritePlayList from '@shared/assets/createFavoritePlayList.svg';
import IconHome from '@shared/assets/home.svg';
import IconSearch from '@shared/assets/search.svg';
import IconSpotify from '@shared/assets/spotify.svg';
import IconUrLibrary from '@shared/assets/urLibrary.svg';
import { Container } from '@shared/box/container/ui';

export const Sidebar = () => {
  return (
    <List className="p-2 h-full flex flex-col gap-y-2 pb-[50px]">
      <Container className="bg-dark-900 w-full border-2px rounded-md mim-h-[20%] px-4 py-4 ">
        <Stack className="">
          <Anchor href="#" variant="transparent" className="">
            <IconSpotify width={85} />
          </Anchor>
          <Anchor
            variant="transparent"
            underline="never"
            className="flex justify-start items-center text-white gap-x-3"
          >
            <IconHome width={25} height={25} color="white" />
            Главная
          </Anchor>
          <Anchor
            variant="transparent"
            underline="never"
            className="flex justify-start items-center text-white  gap-x-3"
          >
            <IconSearch width={25} height={25} color="white" />
            Поиск
          </Anchor>
        </Stack>
      </Container>

      <Container className="bg-dark-900 w-full    rounded-xl  p-3  flex flex-col justify-between h-full">
        <div>
          <List.Item
            classNames={{ itemWrapper: 'w-full', itemLabel: 'w-full' }}
            icon={<IconUrLibrary />}
            className="pt-2 px-1"
          >
            <Flex justify="space-between">
              <Text size="sm"> Моя медиатека</Text>
              <ActionIcon
                variant="transparent"
                radius="xl"
                className="hover:bg-slate-900"
              >
                <IconCreateFavoritePlayList
                  color="white"
                  fill="white"
                  width={15}
                  height={15}
                />
              </ActionIcon>
            </Flex>
          </List.Item>

          <List.Item className="overflow-y-scroll h-[25vh] mt-1 list-none p-1">
            <Container className="bg-[#242424] rounded-xl p-3">
              <Text className="text-[white] font-[700]">
                Создай свой первый плейлист
              </Text>
              <Text size="sm" className="font-[600] mt-2">
                Это совсем не сложно! Мы поможем.
              </Text>
              <Button
                variant="white"
                color="black"
                radius="xl"
                p="sm"
                className="font-[700]"
                mt="lg"
              >
                Создать плейлист
              </Button>
            </Container>
            <Container className="bg-[#242424] rounded-xl p-3 mt-5">
              <Text className="text-[white] font-[700]">
                Создай свой первый плейлист
              </Text>
              <Text size="sm" className="font-[600] mt-2">
                Это совсем не сложно! Мы поможем.
              </Text>
              <Button
                variant="white"
                color="black"
                radius="xl"
                p="sm"
                className="font-[700]"
                mt="lg"
              >
                Создать плейлист
              </Button>
            </Container>
            <Container className="bg-[#242424] rounded-xl p-3 mt-5">
              <Text className="text-[white] font-[700]">
                Создай свой первый плейлист
              </Text>
              <Text size="sm" className="font-[600] mt-2">
                Это совсем не сложно! Мы поможем.
              </Text>
              <Button
                variant="white"
                color="black"
                radius="xl"
                p="sm"
                className="font-[700]"
                mt="lg"
              >
                Создать плейлист
              </Button>
            </Container>
          </List.Item>
        </div>
        <div className=" min-h-[40%] flex flex-col justify-between p-2">
          <Text className="list-none text-[11px]">Юридическая информация</Text>
          <Text className="list-none text-[11px]">
            Центр конфиденциальности
          </Text>
          <Text className="list-none text-[11px]">
            Политика конфиденциальности
          </Text>
          <Text className="list-none  text-[11px] ">
            Настройки файлов cookie
          </Text>
          <Text className="list-none text-[11px]">Специальные возможности</Text>
          <Button
            p="sm"
            className="font-[700] rounded-2xl bg-dark-900 border-white border-[2px]"
            w="100px"
            mt="lg"
          >
            Русский
          </Button>
        </div>
      </Container>
    </List>
  );
};
