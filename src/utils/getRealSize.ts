export const getRealSize = (size, screenSize) => {
    if(screenSize > 1920 && screenSize < 2560) return size*1.1;
    if(screenSize > 2560 && screenSize < 3440) return size*1.3;
    if(screenSize > 3440  && screenSize < 3840) return size*1.6;
    if(screenSize > 3840) return size*2;

    return size;
}