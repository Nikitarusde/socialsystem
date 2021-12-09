import classes from './Profile.module.css'

export const Profile = () => {
   return (
       <div className={classes.content}>
           <div>
               <img src='https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-374116967-7787557.jpg.transform/lh-dcep-transform-width-1440/img.jpg'/>
           </div>
           <div>
               <img src='https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg'/>
           </div>
           <div>
               My posts
               <div>
                   New posts
               </div>
           </div>
           <div>
               <div className={classes.item}>
                   post1
               </div>
               <div className={classes.item}>
                   post2
               </div>
               <div className={classes.item}>
                   post3
               </div>
           </div>
       </div>
   );
}