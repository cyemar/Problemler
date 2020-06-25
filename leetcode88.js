/*Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3 
*/
var merge = function(A, m, B, n) {
    while(m > 0 && n > 0){
        if(A[m - 1] > B[n - 1]){
            A[m+n-1] = A[m-1];
            m--;
        } else {
            A[m+n-1] = B[n-1];
            n--;
        }
    }
    
    while(n > 0) {
        nums1[n - 1] = nums2[n - 1];
        n--;
    }
};