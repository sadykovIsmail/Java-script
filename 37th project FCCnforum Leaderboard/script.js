const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};
const timeAgo = (arg) => {
  const current = new Date()
  const ago = new Date(arg)

  let diffMs = current - ago // difference in milliseconds
  let diffMinutes = diffMs / (1000 * 60) // convert ms to minutes

  if (diffMinutes < 60) {
    return `${Math.floor(diffMinutes)}m ago`
  } else if (diffMinutes < 1440) { // 60 * 24
    return `${Math.floor(diffMinutes / 60)}h ago`
  } else if (diffMinutes < 43200) { // 60 * 24 * 30 (approx 30 days)
    return `${Math.floor(diffMinutes / 1440)}d ago`
  }
}

const viewCount = (views) => {
 return views >= 1000 ? `${Math.floor(views/1000)}k` : views
}

const forumCategory = (id) => {
  const { category, className } = allCategories[id] || { category: 'General', className: 'general' };
 return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;

}
const avatars = (posters, users) => {
 const answer = []



   posters.forEach((poster) => {
     users.find((value) => {
       
       if(value.id == poster.user_id){
         
 answer.push(
  `<img src="${avatarUrl + value.avatar_template.replace('{size}', '30')}" alt="${value.name}">`
 );

       }
     })
  
   })

  return answer.join("")
 



}
const showLatestPosts = (data) => {
  const { users, topic_list } = data;
  const topics = topic_list.topics;

  const rows = topics.map(topic => {
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at
    } = topic;

    const postLink   = `${forumTopicUrl}${slug}/${id}`;
    const categoryEl = forumCategory(category_id);
    const avatarHTML = avatars(posters, users);
    const replies    = posts_count - 1;
    const viewsText  = viewCount(views);
    const timeText   = timeAgo(bumped_at);  // ← raw timestamp used exactly once

    return `
      <tr>
        <td>
          <a class="post-title" href="${postLink}">${title}</a>
          ${categoryEl}
        </td>
        <td>
          <div class="avatar-container">
            ${avatarHTML}
          </div>
        </td>
        <td>${replies}</td>
        <td>${topic.views}</td>
<td>${timeAgo(topic.bumped_at)}</td>  </tr> `;
  });

  const html = rows.join('');
  const container = document.getElementById('posts-container');
  container.innerHTML = html;
  return html;  // so the test suite can inspect the fifth <td>
};






const fetchData = async () => {
  try {
    const response = await fetch(forumLatest); // correct URL
    const data = await response.json(); // parse JSON
    showLatestPosts(data); // pass data to function
  } catch (error) {
    console.log(error); // log any error
  }
};
window.addEventListener('DOMContentLoaded', fetchData);
