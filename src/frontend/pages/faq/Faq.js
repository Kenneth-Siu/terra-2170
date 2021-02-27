import React from "react";
import karnTheSeeker from "../../../../data/cardImages/Karn the Seeker.jpg";
import dropship from "../../../../data/cardImages/Dropship.jpg";
import supplyLineJet from "../../../../data/cardImages/Supply-Line Jet.jpg";
import undercroftEntangler from "../../../../data/cardImages/Undercroft Entangler.jpg";
import figmentOfDeath from "../../../../data/cardImages/Figment of Death.jpg";
import slipstreamHunter from "../../../../data/cardImages/Slipstream Hunter.jpg";
import suspensionSquad from "../../../../data/cardImages/Suspension Squad.jpg";
import turnTheTideOfBattle from "../../../../data/cardImages/Turn the Tide of Battle.jpg";
import coordinateScrambler from "../../../../data/cardImages/Coordinate Scrambler.jpg";
import futureInsight from "../../../../data/cardImages/Future Insight.jpg";
import lambertStealthBomber from "../../../../data/cardImages/Lambert Stealth Bomber.jpg";
import matterRedistribution from "../../../../data/cardImages/Matter Redistribution.jpg";
import nanoreplicatorZero from "../../../../data/cardImages/Nanoreplicator Zero.jpg";
import neutronFlow from "../../../../data/cardImages/Neutron Flow.jpg";
import cloningVats from "../../../../data/cardImages/Cloning Vats.jpg";
import murmurTheCleaner from "../../../../data/cardImages/Murmur the Cleaner.jpg";
import mysticOfTheUnder from "../../../../data/cardImages/Mystic of the Under.jpg";
import iridiumMagnetoKnife from "../../../../data/cardImages/Iridium Magneto-Knife.jpg";
import theMoirai from "../../../../data/cardImages/The Moirai.jpg";
import wantedSpeedster from "../../../../data/cardImages/Wanted Speedster.jpg";
import bioarchitect from "../../../../data/cardImages/Bioarchitect.jpg";
import ingolfsCommand from "../../../../data/cardImages/Ingolfs Command.jpg";
import matterRedistributor from "../../../../data/cardImages/Matter Redistributor.jpg";
import titanOfShisukuSewers from "../../../../data/cardImages/Titan of Shisuku Sewers.jpg";
import acquisitorDelwani from "../../../../data/cardImages/Acquisitor Delwani.jpg";
import umidaKoto from "../../../../data/cardImages/Umida Koto.jpg";
import theAion from "../../../../data/cardImages/The Aion.jpg";
import formling from "../../../../data/cardImages/Formling.jpg";
import moxVoidstone from "../../../../data/cardImages/Mox Voidstone.jpg";
import mutagenicSerum from "../../../../data/cardImages/Mutagenic Serum.jpg";
import trojanHorse from "../../../../data/cardImages/Trojan Horse.jpg";
import hongWaiFactory from "../../../../data/cardImages/Hong Wai Factory.jpg";
import theMartianLens from "../../../../data/cardImages/The Martian Lens.jpg";
import "./Faq.scss";

export default function Faq() {
    return (
        <>
            <title>Rules FAQ · Terra 2170</title>
            <main className="faq-page">
                <h1>Rules FAQ</h1>
                <section>
                    <img src={supplyLineJet} />
                    <div>
                        <h2>Arm</h2>
                        <blockquote>
                            <p>
                                <b>Arm</b> is a <em>keyword action</em>. To "arm" a creature involves two steps:
                            </p>
                            <ol>
                                <li>
                                    Create a colorless Equipment artifact token with "Equipped creature gets +1/+1" and
                                    Equip 2.
                                </li>
                                <li>Attach the equipment to the creature being armed.</li>
                            </ol>
                        </blockquote>
                        <ul>
                            <li>
                                There is no timing window where the equipment is on the battlefield and not attached to
                                the creature. It is created and then attached in the same action.
                            </li>
                            <li>
                                If the creature is not on the battlefield as you perform the arm action, no equipment is
                                created.
                            </li>
                            <li>
                                Some cards will instruct you that a creature enters the battlefield armed. This is a
                                static ability that creates a replacement effect: "If you would put this creature onto
                                the battlefield, instead put it onto the battlefield and arm it."
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={undercroftEntangler} />
                    <div>
                        <h2>Infiltrate</h2>
                        <blockquote>
                            <p>
                                <b>Infiltrate</b> is a <em>keyword ability</em> that makes a creature not able to be
                                blocked if it attacks with exactly one other creature. It is a{" "}
                                <em>triggered ability</em> with the following rules:
                            </p>
                            <p>
                                "Whenever this creature attacks with exactly one other attacking creature, this creature
                                can't be blocked this turn."
                            </p>
                        </blockquote>
                        <ul>
                            <li>
                                The ability doesn't trigger at all if there isn't exactly one other attacking creature.
                            </li>
                            <li>
                                If there isn't exactly one other attacking creature as the ability resolves (for
                                example, if the other attacking creature is removed from play), then the ability will
                                still resolve and the creature can't be blocked this turn.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={figmentOfDeath} />
                    <div>
                        <h2>Mutate</h2>
                        <blockquote>
                            <p>
                                <b>Mutate</b> is a <em>keyword ability</em> that triggers upon the creature dying to
                                find another creature in your deck that costs less and put it onto the battlefield. It
                                is a <em>triggered ability</em> with the following rules:
                            </p>
                            <p>
                                "When this creature dies, reveal cards from the top of your library until you reveal a
                                creature card whose converted mana cost is less than this creature's converted mana
                                cost. Put that creature card onto the battlefield. Then put all the other cards revealed
                                this way on the bottom of your library in a random order."
                            </p>
                        </blockquote>
                        <ul>
                            <li>
                                If you reveal your whole library without finding a creature card that costs less, no
                                creature cards are put onto the battlefield and you put your library back in a random
                                order. (The cards are put back in a random order, but they are not "shuffled".)
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={slipstreamHunter} />
                    <div>
                        <h2>Teleport</h2>
                        <blockquote>
                            <p>
                                <b>Teleport</b> is a <em>keyword ability</em> that allows the player to pay an
                                alternative cost to castt the spell directly from their library if the player is looking
                                at or revealing the card. It is a <em>static ability</em> with the following rules:
                            </p>
                            <p>
                                "You may cast this card from your library while you're looking at it or revealing it. To
                                do so, pay [cost] rather than paying its mana cost."
                            </p>
                        </blockquote>
                        <ul>
                            <li>
                                Teleport only works while you're looking at the card or revealing it while the card is
                                in the library. The effect needs to say "look" or "reveal" for this to work.
                            </li>
                            <li>
                                If you have enough mana, you can teleport multiple spells during a single look or reveal
                                effect.
                            </li>
                            <li>You cannot teleport a card from an opponent's library.</li>
                        </ul>
                        <blockquote>
                            <p>
                                <b>TL;DR:</b>
                                <ul>
                                    <li>
                                        Teleporting a card takes it out of the looked at/revealed cards. Cast the spell
                                        for its teleport cost, finish resolving the effect with the teleported card
                                        taken out, then resolve the teleported spell.
                                    </li>
                                    <li>
                                        While resolving Mutate, finish revealing all the cards first, then choose
                                        whether or not to teleport any cards, then put the mutated creature onto the
                                        battlefield.
                                    </li>
                                </ul>
                            </p>
                        </blockquote>
                        <ul>
                            <li>
                                Teleporting a spell follows all the normal rules for casting a spell, except for timing
                                in some circumstances.
                            </li>
                            <li>
                                If a static ability lets you look at cards in your library at any time, or causes you to
                                play with cards in your library revealed, you can teleport a spell at any time you could
                                cast the spell normally, following the usual timing restrictions.
                            </li>
                            <li>
                                Teleporting a spell during the resolution of another spell or ability follows all the
                                normal rules for casting a spell except for the timing. The spell goes on the stack,
                                then you have to pay its teleport cost, which means you can activate mana abilities
                                while you're casting the spell while you're resolving the original spell or ability.
                            </li>
                            <li>
                                If you teleport a spell during the resolution of another spell or ability, you pick up
                                the original look or reveal effect where you left off, except the teleported spell is no
                                longer part of the set of cards revealed or looked at and cannot be interacted with by
                                the original effect. Do not look at or reveal any additional cards to make up for the
                                teleported card.
                            </li>
                            <li>
                                If you teleport a spell during the resolution of another spell or ability, when the
                                original effect finishes resolving, the active player gets priority with the teleported
                                spell on the stack. Any abilities that triggered when the spell was cast are put on the
                                stack now.
                            </li>
                            <li>
                                If an effect causes you to look at or reveal multiple cards in your library (for
                                example, a creature with Mutate died), finish looking at or revealing all the cards
                                first, then teleport spells, then finish resolving the original effect.
                            </li>
                            <li>
                                While looking at or revealing cards from your library, you must keep the cards in the
                                same order until an effect lets you rearrange them. This order could matter if you tap
                                Millikin for mana, for example, to pay the teleport cost.
                            </li>
                            <li>
                                If an effect attempts to interact with a card that you teleported (for example, you
                                teleported a creature card you were about to put into play from Mutate), that part of
                                the original effect fails and you continue resolving the rest of the effect. (In this
                                example, no creature would be put into play with the Mutate ability)
                            </li>
                        </ul>
                    </div>
                </section>
                <h2>Individual Card FAQs</h2>
                <section>
                    <img src={karnTheSeeker} />
                    <div>
                        <h3>Karn, the Seeker</h3>
                        <ul>
                            <li>Scan counters have no effect by themselves.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={dropship} />
                    <div>
                        <h3>Dropship</h3>
                        <ul>
                            <li>
                                The second ability triggers when blockers are declared and no blockers are declared for
                                Dropship. It is therefore too late for the creature put into play to have any blockers
                                declared for it, so that creature effectively cannot be blocked.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={suspensionSquad} />
                    <div>
                        <h3>Suspension Squad</h3>
                        <ul>
                            <li>
                                The ability can target any creature the defending player controls, and will perform its
                                check upon resolution. This may cause the ability not to do anything if there are no
                                longer enough attacking creatures when the ability resolves.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={turnTheTideOfBattle} />
                    <div>
                        <h3>Turn the Tide of Battle</h3>
                        <ul>
                            <li>The creature counts and life totals are checked upon resolution.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={coordinateScrambler} />
                    <div>
                        <h3>Coordinate Scrambler</h3>
                        <ul>
                            <li>
                                Returning a creature you control to its owner’s hand is part of the cost of Coordinate
                                Scramber's activated ability. Paying a cost can’t be responded to (with Murder, for
                                example).
                            </li>
                            <li>
                                Since Coordinate Scrambler is a creature, you may return Coordinate Scrambler itself to
                                your hand. If you do, the rest of the ability will still work normally.
                            </li>
                            <li>
                                The creature card you put onto the battlefield when the ability resolves may be the same
                                card that you returned to your hand when you paid the cost. If so, it returns to the
                                battlefield as a new object with no relation to its previous existence.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={futureInsight} />
                    <div>
                        <h3>Future Insight</h3>
                        <ul>
                            <li>
                                If X is 2 or less, you won't be able to put the full 3 cards into your hand and will
                                have to make do with fewer.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={lambertStealthBomber} />
                    <div>
                        <h3>Lambert Stealth Bomber</h3>
                        <ul>
                            <li>
                                Effects that switch power and toughness apply after all other effects that change power
                                and/or toughness, regardless of which effect was created first.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={matterRedistribution} />
                    <div>
                        <h3>Matter Redistribution</h3>
                        <ul>
                            <li>The targeted player chooses which of their creatures to return.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={nanoreplicatorZero} />
                    <div>
                        <h3>Nanoreplicator Zero</h3>
                        <ul>
                            <li>The cost is paid and the creature chosen all as the ability resolves.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={neutronFlow} />
                    <div>
                        <h3>Neutron Flow</h3>
                        <ul>
                            <li>
                                X is set as the spell resolves. The token created does not update its power and
                                toughness as the number of artifacts you control changes.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={cloningVats} />
                    <div>
                        <h3>Cloning Vats</h3>
                        <ul>
                            <li>
                                The second ability can put any exiled creature card into its owner's graveyard, not just
                                cards exiled with Cloning Vats.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={murmurTheCleaner} />
                    <div>
                        <h3>Murmur, the Cleaner</h3>
                        <ul>
                            <li>
                                Murmur's first ability doesn’t count as a creature entering the battlefield. Murmur was
                                already on the battlefield; they only changed their types.
                            </li>
                            <li>
                                If Murmur becomes a creature the same turn they enter the battlefield, they have
                                summoning sickness like usual, unless granted haste.
                            </li>
                            <li>
                                Murmur's first ability causes them to become a creature with the creature type Assassin.
                                They remain a planeswalker with the planeswalker type Murmur. (They also retain any
                                other card types or subtypes they may have had.) Each subtype is correlated to the
                                proper card type: planeswalker is only a type (not a creature type), and Assassin is
                                just a creature type (not a planeswalker type).
                            </li>
                            <li>
                                If damage that can’t be prevented is dealt to Murmur after their first ability has
                                resolved, that damage will have all applicable results: specifically, the damage is
                                marked on Murmur (since they're a creature) and that damage causes that many loyalty
                                counters to be removed from them (since they're a planeswalker). Even though they have
                                indestructible, if Murmur has no loyalty counters on them, they're put into their
                                owner’s graveyard.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={mysticOfTheUnder} />
                    <div>
                        <h3>Mystic of the Under</h3>
                        <ul>
                            <li>
                                A creature is only considered unblocked after blockers have been declared and the
                                creature doesn't have any blockers assigned to it.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={iridiumMagnetoKnife} />
                    <div>
                        <h3>Iridium Magneto-Knife</h3>
                        <ul>
                            <li>
                                Arming a creature triggers Iridium Magneto-Knife's triggered ability. (It creates an
                                equipment, then attaches it to the creature.)
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={theMoirai} />
                    <div>
                        <h3>The Moirai</h3>
                        <ul>
                            <li>
                                The target is chosen at random as you put the triggered ability on the stack. Players
                                can respond to this ability knowing what the target is.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={wantedSpeedster} />
                    <div>
                        <h3>Wanted Speedster</h3>
                        <ul>
                            <li>
                                The targeted creature just has its state changed to be attacking. It was not declared as
                                an attacker and therefore any "whenever this creature attacks" triggers do not happen.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={bioarchitect} />
                    <div>
                        <h3>Bioarchitect</h3>
                        <ul>
                            <li>
                                Yes, the ability works on itself. I don't know why you would want to do that, but you do
                                you.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={ingolfsCommand} />
                    <div>
                        <h3>
                            Murmur's Command, Wormcaller's Command, Ingolf's Command, Vuissance's Command,
                            Redistribution Command
                        </h3>
                        <ul>
                            <li>
                                You choose the modes as you cast the spell and pay the appropriate mana cost. You must
                                choose up to X different modes, but no more than the modes printed on the card. Once
                                modes are chosen, they can’t be changed.
                            </li>
                            <li>
                                You can choose a mode only if you can choose legal targets for that mode. Ignore the
                                targeting requirements for modes that aren’t chosen. For example, you can cast Ingolf's
                                Command without targeting an enchantment provided you don’t choose the third mode.
                            </li>
                            <li>
                                As the spell resolves, follow the instructions of the modes you chose in the order they
                                are printed on the card.
                            </li>
                            <li>
                                If a Command is copied, the effect that creates the copy will usually allow you to
                                choose new targets for the copy, but you can’t choose new modes.
                            </li>
                            <li>
                                If all targets for the chosen modes become illegal before the Command resolves, the
                                spell won’t resolve and none of its effects will happen. If at least one target is still
                                legal, the spell will resolve but will have no effect on any illegal targets.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={matterRedistributor} />
                    <div>
                        <h3>Matter Redistributor</h3>
                        <ul>
                            <li>
                                For the first ability, you choose whether to put 1 or X charge counters on it as the
                                ability resolves.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={titanOfShisukuSewers} />
                    <div>
                        <h3>Titan of Shisuku Sewers</h3>
                        <ul>
                            <li>If a creature has multiple instances of mutate, each triggers separately.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={acquisitorDelwani} />
                    <div>
                        <h3>Acquisitor Delwani</h3>
                        <ul>
                            <li>
                                Rebel creatures which are no longer on the battlefield as her ability resolves do not
                                count any more and will not cause her to create an equipment. (i.e. You will never
                                create an equipment that isn't immediately attached to a creature.)
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={umidaKoto} />
                    <div>
                        <h3>Umida Koto</h3>
                        <ul>
                            <li>If a creature has multiple instances of mutate, each triggers separately.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={theAion} />
                    <div>
                        <h3>The Aion</h3>
                        <ul>
                            <li>
                                If you don't have enough cards in your graveyard to shuffle into your library, you
                                shuffle no cards from your graveyard into your library.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={formling} />
                    <div>
                        <h3>Formling</h3>
                        <ul>
                            <li>
                                If Formling becomes a copy of another creature with its second ability, it does not
                                retain its original abilities.
                            </li>
                            <li>
                                Copy effects are generally applied in layer 1. If in the same turn you previously
                                activated Formling's first ability to give it infiltrate, it will become a copy of the
                                other creature in layer 1 and then gain the infiltrate ability in layer 6. This results
                                in Formling becoming a copy of the other creature and also having infiltrate. (The same
                                principle can be applied to Formling's last ability of +1/-1 or -1/+1.)
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={moxVoidstone} />
                    <div>
                        <h3>Mox Voidstone</h3>
                        <ul>
                            <li>
                                Mox Voidstone has no mana cost. You can’t cast it unless an effect (such as that of
                                teleport) allows you to cast it for an alternative cost or without paying its mana cost.
                                Its converted mana cost is 0.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={mutagenicSerum} />
                    <div>
                        <h3>Mutagenic Serum</h3>
                        <ul>
                            <li>You reveal Mutagenic Serum from your hand after you have completed mulliganing.</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={trojanHorse} />
                    <div>
                        <h3>Trojan Horse</h3>
                        <ul>
                            <li>
                                The last ability can be activated by any player, but will usually be activated by an
                                opponent. The player activating the ability is the one who skips the turn.
                            </li>
                            <li>
                                Skipping a turn will only happen if Trojan Horse is on the battlefield as the ability
                                resolves, so if Trojan Horse is removed in response to the ability going on the stack,
                                nobody skips any turns.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={hongWaiFactory} />
                    <div>
                        <h3>Hong Wai Factory</h3>
                        <ul>
                            <li>
                                For its second and third abilities, while resolving the ability you either remove no
                                counters or two counters.
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img src={theMartianLens} />
                    <div>
                        <h3>The Martian Lens</h3>
                        <ul>
                            <li>
                                Remember that this is a search effect and not a "look at" or "reveal" effect. You cannot
                                teleport cards using its ability.
                            </li>
                            <li>
                                Any replacement effects are considered by The Martian Lens when determining the types of
                                mana a land can produce.
                            </li>
                            <li>
                                Any change to a land’s type or splicing of text into a land can affect the types of mana
                                a land can produce.
                            </li>
                            <li>The types of mana are white, blue, black, red, green, and colorless.</li>
                            <li>
                                The Martian Lens checks the effects of all mana-producing abilities of lands you
                                control, but it doesn’t check their costs or whether or not you are able to activate the
                                ability.
                            </li>
                            <li>
                                The Martian Lens doesn’t care about any restrictions or riders your lands put on the
                                mana they produce, such as Pillar of the Paruns and Hall of the Bandit Lord do. It just
                                cares about types of mana.
                            </li>
                            <li>
                                If you are somehow able to have multiple copies of The Martian Lens, they won’t help
                                each other produce mana. If you control The Martian Lens, and all other lands you
                                control either lack mana abilities or are other copies of The Martian Lens, you may
                                still activate The Martian Lens's first ability — it just won’t produce any mana.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}
