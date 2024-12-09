import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import Link from 'next/link';

import React from 'react'

const home = () => {
  return (
    <>
     <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          MERN STACK AUTH
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Secure your applications with robust authentication built on the MERN stack. Implement JWT, password hashing, and role-based access control for a seamless user experience.
          </Text>
        </Container>

        <div className="mt-[calc(var(--mantine-spacing-xl)*1.5)] flex justify-center px-[var(--mantine-spacing-md)] gap-3">

          <Link href={'/login'}><Button className={classes.control} variant="white" size="lg">
            Log in
          </Button></Link>
          <Link href={'/signup'}><Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Sign up
          </Button></Link> 
        </div>
      </div>
    </div>
    </>
  )
}

export default home

