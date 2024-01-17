import { ActionIcon, Anchor, Flex, Group } from '@mantine/core';
import ArrowLeftIcon from '@shared/assets/arrowLeft.svg';
import ArrowRightIcon from '@shared/assets/arrowRight.svg';

export const Header = () => {
  return (
    <div className="w-full h-full ">
      <Flex justify="space-between" align="center" className=" h-full">
        <Group justify="center" className=" min-w-[10%] h-full ">
          <ActionIcon
            radius="xl"
            variant="filled"
            color="black"
            aria-label="Settings"
          >
            <ArrowLeftIcon color="white" fill="white" />
          </ActionIcon>
          <ActionIcon
            radius="xl"
            variant="filled"
            color="black"
            aria-label="Settings"
          >
            <ArrowRightIcon fill="white" />
          </ActionIcon>
        </Group>
        <Group className="min-w-[40%] h-full " justify="center">
          <Anchor underline="never" className="text-[white]">
            Premium
          </Anchor>
          <Anchor underline="never" className="text-[white]">
            Спарвка
          </Anchor>
          <Anchor underline="never" className="text-[white]">
            Скачать
          </Anchor>
          <Anchor>
            <div className="text-[white]">|</div>
          </Anchor>
          <Anchor underline="never" className="text-[white]">
            Зарегистрироваться
          </Anchor>
          <Anchor
            underline="never"
            className="bg-[white] px-4 font-bold py-3 text-black rounded-[22px]"
          >
            Войти
          </Anchor>
        </Group>
      </Flex>
    </div>
  );
};
