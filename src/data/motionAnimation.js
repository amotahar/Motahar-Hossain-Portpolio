


export const iconsAnimationVariant = {
  animationHover: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      delay:.5
    }
  }
}

export const boxMotionVariant = {
  hidden: {
    opacity: 1,
    scale: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
      delay: 0,
      duration: 0.2
    }
  }
}

export const boxMotionItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,

    }
  }
}

export const navLinkVariants = {
  hidden: {
    display: "none",
    opacity: 0,
    height: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.1
    }
  }
}



export const RightToLeftAnimation = {
  initial: {
    x: 0, opacity: 0
  },
  animation: {
    x: [250, 0], opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export const leftToRightAnimation = {
  initial: {
    x: 0, opacity: 0
  },
  animation: {
    x: [-250, 0], opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export const BoxCoontainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

export const BoxItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};



export   const topToBottomAnimation = {
  initial:{
    y:-40,
  },
  animate:{
    y:0,
    transition:{
      duration:0.5,
    }
    
  }
}