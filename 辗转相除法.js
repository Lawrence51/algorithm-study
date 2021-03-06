// 辗转相除法
function getGreatestCommonDivisorV2(a,b) {
    let big = a > b ? a:b;
    let small = a < b ? a:b;
    if (big%small == 0) {
        return small
    }
    return getGreatestCommonDivisorV2(small, big%small)
}

// 更相减损术
function deCome(a,b){
    if (a - b == 0) {
        return a
    }
    let big = a > b ? a:b;
    let small = a < b ? a:b;
    return deCome(big-small,small)
}

//两者结合的话效率比较高，
/*
当a和b均为偶数时，gcd(a,b) = 2×gcd(a/2, b/2) = 2×gcd(a>>1,b>>1)。 
当a为偶数，b为奇数时，gcd(a,b) = gcd(a/2,b) = gcd(a>>1,b)。 
当a为奇数，b为偶数时，gcd(a,b) = gcd(a,b/2) = gcd(a,b>>1)。 
当a和b均为奇数时，先利用更相减损术运算一次，gcd(a,b) = gcd(b,a- b)，此时a-b必然是偶数，然后又可以继续进行移位运算。

这是因为如果有一个为奇数一个为偶数的话，最大公约数肯定不会受2的影响，移位本身是要转化成2进制，然后再进行移位，
这样的话其实就相当于除以2后的取整
*/

function gcd(a,b){
    if (a - b == 0) {
        return a
    }
    if ((a & 1) == 0 && (b & 1) == 0) {
        return gcd(a>>1,b>>1)<<1; // 移位完成后记得移位回去，保证最大的公约数
    } else if ((a & 1) == 0 && (b & 1) != 0){
        return gcd(a>>1,b);
    } else if ((a & 1) != 0 && (b & 1) == 0) {
        return gcd(a,b>>1);
    } else {
        let big = a > b ? a : b;
        let small = a < b ? a : b;
        return gcd(big-small,small)
    }
}

