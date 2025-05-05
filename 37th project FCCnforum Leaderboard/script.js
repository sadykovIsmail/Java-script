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
return `<a class="category ${className}" href="${forumCategoryUrl}/${className}/${id}">${category}</a>`;

}