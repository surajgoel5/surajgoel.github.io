import numpy as np
import cmcrameri.cm as cmc
import matplotlib.colors as colors

num_reps=600
ntimes=10
rand_times=[np.round(np.random.rand(),2) for i in range(ntimes)]

##elem= '<div  class="myGallery"> \n'
##for i in range(num_reps):
##    group_idx=np.random.randint(ntimes)
##    delay_time=rand_times[group_idx]
##    img_nums=np.random.permutation(np.arange(num_imgs)) 
##    elem=elem+f'     <div class="fadegroup" style=" z-index:{2+group_idx} " > \n'
##    
##    for j in range(num_imgs):
##         elem=elem+f'       <div style="animation-delay: {np.round(delay_time+2*j,2)}s" class="color-box color-box-{img_nums[j]}"> </div>\n'
##    elem=elem+' </div> \n'
##elem=elem+'</div> \n'
##
##with open('./test.html', 'w') as f:
##    f.write(elem)

elem= '<div  class="myGallery"> \n'
for i in range(num_reps):
    group_idx=np.random.randint(ntimes)    
    delay_time=np.random.choice(rand_times)
    elem=elem+f'     <div class="fadegroup "><div style="animation-name: fade{group_idx}; animation-delay: {np.round(delay_time,2)}s"></div>  </div> \n'

elem=elem+'</div> \n'

with open('./test.html', 'w') as f:
    f.write(elem)

ncolors=6
clrs=cmc.romaO(np.linspace(0,1,ncolors))


perms=np.array([np.random.permutation(np.arange(ncolors )) for i in range(ntimes)])

css=''
for i in range(ntimes):
    perm=perms[i]
    css+=f'@keyframes fade{i}' +'{ \n'
    for perc,per in enumerate(perm):
        css+=f'{int(perc*(20))}%'+'{'+f'background-color: {colors.rgb2hex(clrs[per])}'+'} \n'
	
    css+='}\n'
#print(css)
    

with open('./color_styles.css', 'w') as f:
    f.write(css)

