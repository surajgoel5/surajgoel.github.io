import numpy as np
import cmcrameri.cm as cmc
import matplotlib.colors as colors

num_reps=1500
ntimes=10
rand_times=[np.round(np.random.rand(),2) for i in range(ntimes)]



elem= '<div  class="myGallery"> \n'
for i in range(num_reps):
    group_idx=np.random.randint(ntimes)    
    delay_time=np.random.choice(rand_times)
    elem=elem+f'     <div class="fadegroup "><div style="animation-name: fade{group_idx}; animation-delay: {np.round(delay_time,2)}s"></div>  </div> \n'

elem=elem+'</div> \n'

with open('./test.html', 'w') as f:
    f.write(elem)

ncolors=5
clrs=cmc.romaO((np.linspace(0,1,ncolors) ))


perms=np.array([np.random.permutation(np.arange(ncolors )) for i in range(ntimes)])

css=''
for i in range(ntimes):
    perm=perms[i]
    css+=f'@keyframes fade{i}' +'{ \n'
    for perc,per in enumerate(perm):
        clr=clrs[per]
        hsv=colors.rgb_to_hsv(clr[:3])
        #hsv[2]=hsv[2]*0.5
        clr=colors.hsv_to_rgb(hsv)
        css+=f'{int(100*perc/(ncolors-1))}%'+'{'+f'background-color: {colors.rgb2hex(clr)}'+'} \n'
	
    css+='}\n'
#print(css)
    

with open('../css/inverse_design_paper_color_styles.css', 'w') as f:
    f.write(css)

