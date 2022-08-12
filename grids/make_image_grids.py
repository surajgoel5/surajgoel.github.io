import numpy as np

num_imgs=6
num_reps=200



elem= '<div  class="myGallery"> \n'
for i in range(num_reps):
    elem=elem+'     <div class="fadegroup" > \n'
    delay_time=np.round(np.random.rand()*2,2)
    img_nums=np.random.permutation(np.arange(num_imgs)) 

    for j in range(num_imgs):
         elem=elem+f'       <img style="animation-delay: {np.round(delay_time+2*j,2)}s" src="https://picsum.photos/200/100?{img_nums[j]}" /> \n'
    elem=elem+'     </div> \n'
elem=elem+'</div> \n'

with open('./test.html', 'w') as f:
    f.write(elem)