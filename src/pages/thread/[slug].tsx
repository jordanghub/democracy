import * as Styled from 'pagesStyle/thread-show.style';
import { Nav, ThreadFull, Container } from 'components';
import { threadSingle } from 'fixtures/thread' 
import { useRouter } from 'next/router';
import { BaseLayout } from 'components/Layouts';
const Thread = () => {
  const router = useRouter()
  const { slug } = router.query;
  return (
    <BaseLayout>
      <Container>
        <ThreadFull
          title={threadSingle.title}
          messages={threadSingle.messages}
          categories={threadSingle.categories}
        />
      </Container>
    </BaseLayout>
  )
}

export default Thread; 