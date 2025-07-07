import Container from '@/components/shared/container';
import TeamCard from './TeamCard';
import SectionHeader from '@/components/shared/section-header';
import { getTeam } from '@/lib/team';
export const revalidate = 0;

async function Team() {
  const team = await getTeam();
  return (
    <section className=" mt-16 md:mt-24 lg:mt-32" id="team">
      <Container>
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
          {team.map((t) => (
            <TeamCard
              key={t.name}
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
