import Container from '@/components/shared/container';
import TeamCard from './TeamCard';
import { teamData } from '@/lib/data';
import SectionHeader from '@/components/shared/section-header';
// import { Team as TeamType } from '@/lib/types';
// import { client, urlFor } from '@/lib/sanity';

// async function getData() {
//   const query = `
//     *[_type == 'team'] {
//   name,
//   role,
//   image
// }`;

//   const data = await client.fetch(query);
//   return data;
// }

async function Team() {
  // const data: TeamType[] = await getData();
  return (
    <section className=" mt-16 md:mt-24 lg:mt-32" id="team">
      <Container>
        {/* <h2 className="text-3xl md:text-4xl text-primary font-semibold">
          Meet the driving force behind Zaabuni Youth
        </h2> */}
        <SectionHeader
          highlightedWord="driving force"
          className="leading-snug hidden lg:block"
          size="base">
          Meet the driving force behind Prosep Services Limited
        </SectionHeader>
        <SectionHeader
          highlightedWord="driving force"
          className="leading-snug lg:hidden"
          size="md">
          Meet the driving force behind Prosep Services Limited
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamData.map((t) => (
            <TeamCard
              key={t.name}
              // image={urlFor(t.image).url()}
              image={t.image}
              name={t.name}
              role={t.role}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Team;
