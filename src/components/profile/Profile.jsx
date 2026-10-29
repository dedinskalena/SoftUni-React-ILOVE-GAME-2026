import styles from "./Profile.module.css"
export default function Profile() {
   return(
          <section>

        <form>
            <div className={styles.container}>
                <h1>Profile</h1>
                 
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-picture" />
                 

                <label htmlFor="profile-picture">Profile picture</label>
                <input className={styles.input} type="file"  id="profile-picture" name="profile-picture" placeholder="Profile picture"/>
                <input type="submit" className="btn submit" value="Update Profile"/>
            </div>
        </form>
    </section>
   );
}