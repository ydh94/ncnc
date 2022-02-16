import TopCategoriesStyles from '../styles/TopCategories.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TopCategories = ({ list }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={TopCategoriesStyles.div}>
      {list.map((e) => (
        <Link href={`/categories/${e.id}`} key={e.id}>
          <a>
            <div
              className={
                String(e.id) === id ? TopCategoriesStyles.selected : null
              }
            >
              {e.name}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TopCategories;
