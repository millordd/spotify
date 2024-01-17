import { Header } from 'src/widgets/header';
import { Main } from 'src/widgets/main';
import { Sidebar } from 'src/widgets/sidebar';

import { AppShell } from '@mantine/core';

export const App = () => {
  return (
    <>
      <AppShell
        transitionDuration={500}
        transitionTimingFunction="ease"
        p={3}
        layout="alt"
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'xs' }}
        footer={{ height: 60 }}
        withBorder={false}
      >
        <AppShell.Header zIndex={222222} className="bg-black ">
          <div className="bg-[#101010] mt-2 h-[60px] rounded-t-md">
            <Header />
          </div>
        </AppShell.Header>
        <AppShell.Main className="bg-dark-700 ">
          <Main />
        </AppShell.Main>
        <AppShell.Navbar zIndex={999}>
          <Sidebar />
        </AppShell.Navbar>
        <AppShell.Footer
          p="md"
          zIndex={1000}
          className="bg-[red] sticky bottom-0"
        >
          Footer
        </AppShell.Footer>
      </AppShell>
    </>
  );
};
